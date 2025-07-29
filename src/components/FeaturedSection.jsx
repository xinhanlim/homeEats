import FeaturedCard from "./FeaturedCard";

export default function FeaturedSection() {
    return (
        <div className="bg-[#FEFEFE] justify-center mx-auto pb-36 max-w-[1536px] gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </div>
    )
}