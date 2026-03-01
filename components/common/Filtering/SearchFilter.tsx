"use client";

import { useDebounce } from "@/components/hooks/use-debounce";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function SearchFilter({
  placeholder = "Search...",
  paramName = "searchTerm",
  className
}: {
  placeholder: string;
  paramName: string;
  className?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(searchParams.get(paramName) || "");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const initialValue = searchParams.get(paramName) || "";

    if (debouncedValue === initialValue) return;

    if (debouncedValue) {
      params.set(paramName, debouncedValue);
      params.set("page", "1");
    } else {
      params.delete(paramName);
      params.delete("page");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className={`${className ? `relative w-full ${className}` : "relative w-full lg:w-72"}`}>
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary placeholder:text-primary h-4 w-4" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-10 w-full"
        disabled={isPending}
      />
    </div>
  );
}
