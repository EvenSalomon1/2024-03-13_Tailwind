const WhoWeAre = () => {
  return (
    <section className="flex p-10 gap-12">
      <div>
        <h3 className="text-2xl font[1100] mb-6">Who we are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          accumsan turpis quis quis at. Nec, nisi dis duis urna, elit justo,
          euismod. Ultricies fermentum nibh in ut quis lacus sollicitudin proin.
          Eu sit enim ullamcorper nisl id est. A pulvinar ut fringilla vulputate
          feugiat lobortis phasellus mattis dignissim. Dapibus sed quam
          venenatis platea. Et pharetra, convallis nec volutpat. Sed id et sed
          diam. Diam leo ipsum, urna in lorem amet euismod.
        </p>
      </div>
      <div className="flex gap-8">
        <article>
          <img src="/chair1.png" alt="chair" />
          <p>Light brown chair with wooden legs</p>
          <p>$100</p>
        </article>
        <article>
          <img src="/chair2.png" alt="chair" />
          <p>Black chair with long legs</p>
          <p>$100</p>
        </article>
        <article>
          <img src="/chair3.png" alt="chair" />
          <p>White chair with spiral design legs</p>
          <p>$100</p>
        </article>
      </div>
    </section>
  );
};

export default WhoWeAre;
