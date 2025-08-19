export default function TipContent({ title,content}:{title:string,content:string}){
  return(
    <div className="mx-4 text-white text-center">
      <h2 className="text-title2 mb-2 break-keep [overflow-wrap:break-word]">{title}</h2>
      <div className="text-body3 break-keep [overflow-wrap:break-word]">{content}</div>
    </div>
    );
}