import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const MarketingLayout: React.FC<MarketingLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="h-full bg-zinc-100">
      <Navbar />
      <main className="bg-zinc-100 pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
