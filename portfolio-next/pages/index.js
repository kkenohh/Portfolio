import Layout from "@/components/layout";
import Image from "next/image";

export function Home() {
  return (
    <Layout>
      <Image
        src="/../public/images/file-1.jpeg"
        height={900}
        width={900}
        alt="Legos"
      />
    </Layout>
  )
}

export default Home;