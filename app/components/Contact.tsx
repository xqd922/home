const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">联系我</h2>
        <p>欢迎发送邮件至
          <a href="mailto:example@example.com" className="text-blue-500 hover:underline ml-1">example@example.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
