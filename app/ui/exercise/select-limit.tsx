"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectLimit() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLimit = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", value);
    if (value) {
      params.set("limit", value);
      params.set("page", "1");
    } else {
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <label
      htmlFor="limitExercises"
      className="mx-2 text-xl max-md:flex items-center inline font-bold text-gray-900"
    >
      Limit:
      <select
        title="limitExercises"
        name="limitExercises"
        id="limitExercises"
        className="bg-transparent pl-2 border-none font-medium max-md:w-full"
        onChange={(e) => handleLimit(e.target.value)}
        defaultValue={searchParams.get("limit")?.toString()}
      >
        <option defaultChecked value="12">
          12
        </option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="48">48</option>
      </select>
    </label>
  );
}
