export default function Projects() {
    const arr = [1, 2, 3, 4, 5 ,6 ,7];
    return (
        <div id="projects">
            {arr.map((_, idx) => {
                return (
                    <div className="project" key={idx}>
                        <h3>maddlesp/{idx}</h3>
                        <span className="infobar">
                            <a>Github</a>
                            <a>Raw</a>
                        </span>
                        <p>{idx} hello hello hello hello hello. hello hello hellohello hello hello hello hello hello hello</p>
                    </div>
                );
            })}
        </div>
    )
}