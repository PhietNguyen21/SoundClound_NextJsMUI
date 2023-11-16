import AppFooter from '@/components/footer/app.footer';
import AppHeader from '@/components/header/app.header';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import NextAuthProvider from '@/lib/next.auth.provider';
import { getServerSession } from "next-auth/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthProvider>
            <AppHeader />
            {children}
            <AppFooter />
          </NextAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
