const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-sm text-foreground/60">
      © {year} 我的个人主页
    </footer>
  );
};

export default Footer;
