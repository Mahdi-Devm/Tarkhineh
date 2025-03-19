interface HeroTitleProps {
  name: string
}

export default function HeroTitle({ name }: HeroTitleProps) {
  return <h5 className="text-light-black my-4 text-3xl font-bold">{name}</h5>
}
