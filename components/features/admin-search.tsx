"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  search: z.string(),
});

export default function AdminSearch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="w-2/3 md:w-1/3 lg:w-1/3">
          <Input
            type="search"
            placeholder="Search products..."
            {...form.register("search")}
          />
        </div>
      </div>
    </form>
  );
}
