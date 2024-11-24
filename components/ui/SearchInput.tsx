'use client'
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem } from "./form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";

const formSchema = z.object({
    input: z.string().min(2).max(30)
});

const SearchInput = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: ""
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.push(`/search/${values.input}`);
        form.reset();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                <FormField control={form.control} name="input" render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Search..." 
                                {...field} 
                                className="bg-input-light dark:bg-input-dark text-input-text-light dark:text-input-text-dark border border-input-border-light dark:border-input-border-dark rounded-md p-2"
                            />
                        </FormControl>
                    </FormItem>
                )} />
                <button type="submit" className="hidden">Search</button>
            </form>
        </Form>
    );
};

export default SearchInput;