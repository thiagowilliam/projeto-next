import {GetServerSideProps} from 'next'

interface IProduct{
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProduts: IProduct[];
}

export default function Home({recommendedProduts}: HomeProps) {
  return (
    <div>
      <section>
        <h1>Products</h1>

        <ul>
          {recommendedProduts.map(recommendedProduts => {
            return(
              <li key={recommendedProduts.id}>
                {recommendedProduts.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async() => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProduts = await response.json();

  return {
    props: {
      recommendedProduts
    }
  }
}
