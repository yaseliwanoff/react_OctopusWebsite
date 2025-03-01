import WorkImage1 from "@assets/images/png/test.png"
import WorkImage2 from "@assets/images/png/test.png"
import WorkImage3 from "@assets/images/png/test.png"
import WorkImage4 from "@assets/images/png/test.png"
import WorkImage5 from "@assets/images/png/test.png"

const Works = () => {
  return (
    <section className="mt-[40%]">
      <div className="inline-flex gap-4 items-center rotate-6">
        {/* Использовать perspective и классические изображения без наклона */}
        <img width={406} height={254} src={WorkImage1} alt="work" />
        <img width={406} height={254} src={WorkImage2} alt="work" />
        <img width={406} height={254} src={WorkImage3} alt="work" />
        <img width={406} height={254} src={WorkImage2} alt="work" />
        <img width={406} height={254} src={WorkImage5} alt="work" />
      </div>
    </section>
  )
}

export default Works;
