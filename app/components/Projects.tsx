const Projects = () => {
  const projects = [
    { id: 1, title: '智能助手应用', link: '#' },
    { id: 2, title: '电子商务平台', link: '#' },
    { id: 3, title: '数据可视化仪表板', link: '#' },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold">项目</h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.id}>
              <a href={p.link} className="text-blue-500 hover:underline">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
