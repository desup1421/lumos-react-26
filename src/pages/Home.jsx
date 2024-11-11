import React from "react";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";

const Home = () => {
  const persBlog = [
    {
      slug: "sambut-hari-pelanggan-nasional-2023-intip-inovasi-customer-experience-di-tokopedia-care",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
      text: "Sambut Hari Pelanggan Nasional 2023, Intip Inovasi Customer Experience di Tokopedia Care",
      date: "10 Agustus 2024"
    },
    {
      slug: "tokopedia-rekap-tren-belanja-online-kuartal-iii-2023-transaksi-groceries-melesat",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
      text: "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
      date: "10 Agustus 2024"
    },
    {
      slug: "tokopedia-luncurkan-fitur-dipromosikan-affiliate-pengguna-akin-mudah-dapat-penghasilan-tambahan",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
      text: "Tokopedia Luncurkan Fitur ‘Dipromosikan Affiliate’, Pengguna Makin Mudah Dapat Penghasilan Tambahan",
      date: "10 Agustus 2024"
    }
  ];

  const BTSBlog = [
    {
      slug: "mengenal-sosok-kartini-masa-kini-nakaBunda-tim-tokopedia-care",
      image: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1-324x160.png",
      text: "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care",
      date: "10 Agustus 2024"
    },
    {
      slug: "perayaan-1-dekade-tokopedia-berbagi-tawa-bersama-keluarga-besar-nakama",
      image: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464-324x160.jpg",
      text: "Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga Besar Nakama",
      date: "10 Agustus 2024"
    },
    {
      slug: "evoware-produksi-gelas-yang-bisa-dimakan-untuk-mengurangi-sampah-plastik",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
      text: "Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi Sampah Plastik",
      date: "10 Agustus 2024"
    },
  ]

  const heroBlog = [
    {
      slug:"persiapan-ifw-2024-tokopedia-fashion-market-x-indonesia-fashion-week-punya-kejutan-buat-kamu",
      image: "https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg",
      text: "Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu! Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!",
      date: "10 Agustus 2024"
    }, 
    {
      slug:"brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia-brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg",
      text: "Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia",
      date: "10 Agustus 2024"
    }, 
    {
      slug:"brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia-brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg",
      text: "Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia",
      date: "10 Agustus 2024"
    }, 
    {
      slug:"brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia-brand-fesyen-thenblank-ciptakan-peluang-dalam-negeri-bersama-tokopedia",
      image: "https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg",
      text: "Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia",
      date: "10 Agustus 2024"
    }
  ]

  
  return(
    <>
      <Hero data={heroBlog} />
      <BlogList title="Siaran Pers" data={persBlog} />
      <BlogList title="Behind The Scene" data={BTSBlog} />
    </>
  )
};

export default Home;
