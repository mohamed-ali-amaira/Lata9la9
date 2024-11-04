"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "لازم الاسم يكون فيه أكثر من زوز حروف" })
    .max(255),
  phone: z.string().min(8, {
    message: "لازم الرقم يكون 8 أرقام على الأقل",
  }),
  adress: z.string().min(2, { message: "Istichara text" }).max(5000),
});

const extractReferrer = (url: string): string | null => {
  const regex = /[?&]referer=([^&]+)/;
  const match = url.match(regex);
  return match ? decodeURIComponent(match[1]) : null;
};

const ContactSection = () => {
  const [selectedOption, setSelectedOption] = useState("cod");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      adress: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, phone, adress } = values;
    const referrer = extractReferrer(window.location.href);
    
    try {
      const req = await axios.post(`/api/submit`, {
        ...values,
        occupation: "",
        selectedOption,
        referrer,
      });

      console.log('Response:', req.data);

    } catch (error) {
      console.error('Error during submission:', error);
    } finally {
      // Redirect to the thanks page regardless of success or failure
      router.push('/thanks');
    }
  }

  return (
    <section
      id="contact"
      className="container flex items-center justify-center py-24 sm:py-32"
      style={{ marginTop: -100 }}
    >
      <section className="lg:w-3/6 w-full"> 
        <div>
          <div className="mb-4">
            <h2 className='text-4xl font-bold text-center'>
              <span className="text-transparent bg-gradient-to-r from-[#f22b0a] to-primary bg-clip-text">
                استشرنا الان
              </span>
            </h2>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card w-full">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
                dir="rtl"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-[#031833]">الإسم</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="border border-gray-600 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-[#031833]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-[#031833]">رقم الهاتف</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder=""
                            {...field}
                            className="border border-gray-600 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-[#031833]" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="adress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#031833]">احكيلنا</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="اكتب هنا"
                            {...field}
                            className="w-full h-48 p-2 resize-none border rounded-lg bg-input text-black"
                            rows={6}
                            onInput={(e) => {
                              const target = e.target as HTMLTextAreaElement;
                              target.style.height = "auto";
                              target.style.height = `${target.scrollHeight}px`;
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-[#031833]" />
                      </FormItem>
                    )}
                  />
                </div>

                <div dir="rtl" className="flex w-full ">
                  <div className="flex flex-1 flex-col items-start justify-start py-8 px-4">
                    <h2 className="text-2xl mb-4 text-[#031833]">شكرا على ثقتك بنا</h2>
                    <h3 className="text-1xl mb-4 flex items-center text-[#031833]">
                      <ShieldCheckIcon className="w-5 h-5 ml-2 text-gray-600" />
                      جميع معلوماتك محفوظة بسرية تامة لدينا
                    </h3>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <Button className="mt-4 lg:w-1/3 w-8/12">ارسال</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};

export default ContactSection;
