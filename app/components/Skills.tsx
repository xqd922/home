const Skills = () => {
  const skills = ['React', 'Node.js', 'TypeScript', 'TailwindCSS'];
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">技能</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((item) => (
            <li key={item} className="px-3 py-1 bg-background border border-foreground/10 rounded-full">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
