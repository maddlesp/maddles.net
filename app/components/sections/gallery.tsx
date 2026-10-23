import Image from 'next/image';

export default function Gallery() {
    return (
        <div id="gallery">
            {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((_, index) => {
                return (
                    <Image key={index} src="/girlfailure.png" height={100} width={100} alt={"temp"}/>
                )
            })}
        </div>
    );
}