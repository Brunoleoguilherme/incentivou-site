import './globals.css';
import { Header, Footer } from '@/components/SiteChrome';

export const metadata = {
  title: 'IncentiVou | Lei de Incentivo ao Esporte',
  description:
    'Tecnologia, estratégia e gestão completa para projetos esportivos captarem, executarem e prestarem contas com segurança.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}