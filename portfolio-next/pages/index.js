import Layout from "@/components/layout";
import Image from "next/image";

export function Home() {
  return (
    <Layout>
      <Image
        src="/../public/images/file-1.jpeg"
        height={1000}
        width={800}
        alt="Legos"
      />
    </Layout>
  )
}

export default Home;