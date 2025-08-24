import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PBTIResultHeader from "../../components/PBTI/PBTIResult/PBTIResultHeader";
import PBTIAnalysisSection from "../../components/PBTI/PBTIResult/PBTIAnalysisSection";
import PBTIPerfumeStyleSection from "../../components/PBTI/PBTIResult/PBTIPerfumeStyleSection";
import PBTIPerfumeTypeSection from "../../components/PBTI/PBTIResult/PBTIPerfumeTypeSection";
import PBTISummarySection from "../../components/PBTI/PBTIResult/PBTISummarySection";
import PBTIRecommendedPerfumesSection from "../../components/PBTI/PBTIResult/PBTIRecommendedPerfumesSection";
import PBTIResultLineRecommendation from "../../components/PBTI/PBTIResult/PBTIResultLineRecommendation";

import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";

// API
import { postPBTIDetailResult } from "../../apis/PBTI";
import type { RequestPbtiDetail, ResponsePbtiResultDetail } from "../../types/apis/PBTI";
import PBTIDetailResultHeader from "../../components/PBTI/PBTIResult/PBTIDetailResultHeader";
import BottomButton from "../../components/common/BottomButton";

const PBTIDetailResultView: React.FC = () => {
  // ---------- route / state ----------
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // ---------- UI states ----------
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<ResponsePbtiResultDetail | null>(null);

  // ---------- derived values (응답 구조를 기존 props로 매핑) ----------
  const savedName = detail?.savedName;
  const recommendation = detail?.recommendation;
  const perfumeRecommends = detail?.perfumeRecommend ?? [];
  const keywords = detail?.keywords ?? [];
  const perfumeStyle = detail?.perfumeStyle;
  const scentPoint = detail?.scentPoint;
  const summary = detail?.summary;

  // ---------- guard: id 체크 ----------
  const numericId = useMemo(() => {
    const n = Number(id);
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [id]);

  // ---------- fetch detail ----------
  useEffect(() => {
    let active = true;

    const fetchDetail = async () => {
      if (!numericId) {
        alert("잘못된 접근입니다. (유효하지 않은 ID)");
        navigate(-1);
        return;
      }

      try {
        setIsLoading(true);
        const body: RequestPbtiDetail = { pbtiId: numericId };
        const result = await postPBTIDetailResult(body);
        if (!active) return;
        setDetail(result);
      } catch (err) {
        console.error(err);
        if (!active) return;
        toast.error("결과를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
      } finally {
        if (active) setIsLoading(false);
      }
    };

    fetchDetail();
    return () => {
      active = false;
    };
  }, [numericId, navigate]);

  // ---------- custom toast ----------
  const showCopiedToast = () =>
    toast.custom(
      (t) => (
        <div className="fixed bottom-20 w-full pointer-events-none">
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"} mx-auto w-full max-w-[448px] bg-grayscale-1000-f2 text-white rounded-2xl py-4 px-5 flex items-center shadow-lg pointer-events-auto`}
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <AiOutlineExclamation className="w-4 h-4 text-grayscale-1000-f2" />
              </div>
              <span className="text-center text-body3">링크가 복사되었습니다.</span>
            </div>
          </div>
        </div>
      ),
      { duration: 1500 }
    );

  const handleShareClick = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showCopiedToast();
    } catch (err) {
      console.error("URL 복사 실패", err);
      toast.error("복사에 실패했습니다 😢");
    }
  };

  // ---------- loading view ----------
  if (isLoading) {
    return (
      <div className="w-full min-w-[375px] max-w-120 min-h-screen p-3 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
        <PBTIResultHeader />
        <div className="w-full max-w-[640px] mt-6 animate-pulse space-y-3">
          <div className="h-8 bg-white/70 rounded-xl" />
          <div className="h-48 bg-white/70 rounded-2xl" />
          <div className="h-36 bg-white/70 rounded-2xl" />
          <div className="h-24 bg-white/70 rounded-2xl" />
        </div>
        <Toaster position="bottom-center" />
      </div>
    );
  }

  // ---------- empty view (데이터 없음) ----------
  if (!detail) {
    return (
      <div className="min-w-[375px] max-w-120 min-h-screen p-3 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
        <PBTIResultHeader />
        <div className="w-full max-w-[640px] mt-10 text-center text-grayscale-800">
          조회 결과가 없어요.
        </div>
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl bg-main-500 text-white"
          >
            뒤로가기
          </button>
        </div>
        <Toaster position="bottom-center" />
      </div>
    );
  }

  // ---------- normal view ----------
  return (
    <div className="min-w-[375px] max-w-120 min-h-screen p-3 pt-10 pb-10 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <PBTIDetailResultHeader title={savedName}/>
      <PBTIResultHeader />

      {/* detail 사용 */}
      {recommendation && (
        <PBTIResultLineRecommendation LineRecommendation={recommendation} />
      )}
      <PBTIAnalysisSection keywordArrayData={keywords} />
      {perfumeStyle && (
        <PBTIPerfumeStyleSection
          description={perfumeStyle.description}
          notes={perfumeStyle.notes}
        />
      )}
      {scentPoint && <PBTIPerfumeTypeSection data={scentPoint} />}
      {summary && <PBTISummarySection summary={summary} />}
      <PBTIRecommendedPerfumesSection perfumeRecommends={perfumeRecommends} />

      <BottomButton 
        children="공유하기"
        onClick={handleShareClick}
        customClassName="text-main-500 text-title3 bg-white border-main-500 border-1 rounded-2xl w-full p-3"
        noPxValue={true}
      />

      {/* Toaster */}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default PBTIDetailResultView;
