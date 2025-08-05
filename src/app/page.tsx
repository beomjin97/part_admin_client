import { axiosInstance } from "@/utils/axiosInstance";
import calcStockCount from "@/utils/calcStockCount";

export default async function Home() {
  const {data} = await axiosInstance.get('/part');

  return (
    <table className="mx-auto border">
      <thead>
        <tr>
          <th className="px-10 border">제조사</th>
          <th className="px-10 border">대분류</th>
          <th className="px-10 border">소분류</th>
          <th className="px-16 border">이름</th>
          <th className="px-10 border">파트 넘버</th>
          <th className="px-8 border">재고 수량</th>
          <th className="px-10 border">보관 장소</th>
          <th className="px-10 border">보관 상세</th>
          <th className="px-10 border">호환 장비</th>
        </tr>
      </thead>
        <tbody>
        {data.map((part:any) => 
          <tr className="text-center" key={part.id}>
            <td className="border">{part.manufacturer.name}</td>
            <td className="border">{part.category.large_category}</td>
            <td className="border">{part.category.small_category}</td>
            <td className="border">{part.part_name}</td>
            <td className="border">{part.part_number}</td>
            <td className="border">{calcStockCount(part.histories)}</td>
            <td className="border">{part.location.large_location}</td>
            <td className="border">{part.location.small_location}</td>
            <td className="border">{part.compatible_equipment}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
