import WhatWeCanDoIcon from "@assets/images/svg/icon.svg"

export default function About() {
  const firstSection = [];
  const middleSection = [];
  const lastSection = [];
  
  return (
    <section className="container">
      <div className="flex gap-2 items-center">
        <span>
          <img src={WhatWeCanDoIcon} alt="icon" />
        </span>
        <span>What We Can Do</span>
      </div>
      <div>

      </div>
    </section>
  )
}