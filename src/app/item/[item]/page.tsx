import React from "react";

export default function page({ params }: { params: { item: string } }) {
  return (
    <div>
      <h1 className="text-3xl pb-4 capitalize">{params.item} Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        incidunt temporibus quam tempora aspernatur expedita maiores nobis,
        labore et blanditiis assumenda praesentium molestias dolor. Voluptatem
        rem facilis commodi ex adipisci laudantium quam dolor atque. Assumenda
        iure distinctio quas commodi? Dolorem voluptates quo sint at. In esse
        doloribus, incidunt modi debitis aut aliquid officia unde quam eius
        impedit atque sapiente, neque rerum nesciunt pariatur sunt asperiores.
        Dolores, et incidunt. Cumque aliquam minus deserunt autem fuga modi,
        ullam, maiores aspernatur sint nobis, distinctio libero perspiciatis
        dignissimos nesciunt? Pariatur vel mollitia eveniet, quis, laudantium
        quod consequuntur magni officia aperiam suscipit perspiciatis. Natus
        libero ex quaerat fuga, deserunt tenetur vitae, fugiat ipsum
        perspiciatis, possimus reiciendis! Ipsum, veritatis amet, delectus eaque
        hic quidem sequi ex voluptates placeat dolorem sed doloremque dolor.
        Atque ea accusantium ipsa totam vitae! Excepturi, exercitationem. Non
        totam illum delectus ipsam fugiat unde inventore officia neque aliquid
        doloribus nemo deserunt ab distinctio perferendis quas similique
        recusandae hic cupiditate, ducimus et, minus sapiente quia odio! Fugit
        mollitia doloribus amet pariatur tempore quia, aspernatur natus
        molestiae cum dolorum culpa, dolore accusantium voluptate minima
        reprehenderit laborum sint magnam magni vero et laudantium excepturi
        quibusdam! Vel blanditiis minus nisi placeat iste cumque itaque
        excepturi quod totam.
      </p>
    </div>
  );
}
