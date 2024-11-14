import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Script from "next/script";

const inter = Cairo({ subsets: ["latin"] });

const Navbar = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Lataklak",
  description: "lataklak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <head>
        {/* Facebook Pixel */}
        <Script
          id='fb-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '899662028680566');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: "none" }}
            src='https://www.facebook.com/tr?id=899662028680566&ev=PageView&noscript=1'
          />
        </noscript>

        {/* Microsoft Clarity */}
        <Script
          id='clarity'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ofcmt5g07e");
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
