var ky = [
    {
        "kayu":"Meranti",
        "desk":"Untuk industri plywood dengan beberapa pilihan seperti Meranti merah, Meranti kuning, Meranti putih, dan Meranti batu",
        "imge":"meranti.png",
        "link":'<a href="detail.html#meranti" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Keruing",
        "desk":"Untuk plywood, konstruksi bangunan, bak truk, perkapalan/perahu",
        "imge":"keruing.jpg",
        "link":'<a href="detail.html#keruing" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Mersawa",
        "desk":"Untuk bangunan ringan, papan, lantai, kapal, dan tiang ",
        "imge":"mersawa.jpg",
        "link":'<a href="detail.html#mersawa" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Bengkirai",
        "desk":"Kayu keras dengan berat jenis yang melebihi kayu jati. Banyak diminati industri pengolahan kayu dan mebel karena mudah diserut, diukir, dan diproses",
        "imge":"bengkirai.jpg",
        "link":'<a href="detail.html#bengkirai" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Rimba Campuran",
        "desk":"Bintangur, Kempas, Simpur, Medang, Bayur, Binuang Laki, Gerunggang",
        "imge":"rimba.jpg",
        "link":'<a href="detail.html#rimba" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Nyatoh",
        "desk":"Kayu keras berwarna merah muda, merah kecoklat-coklatan yang mudah dipoles. Untuk konstruksi, plywood, lantai, papan, kapal, rangka pintu & jendela, kraft paper",
        "imge":"nyatoh.jpg",
        "link":'<a href="detail.html#nyatoh" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Palapi",
        "desk":"Kayu keras berwarna coklat-merah sampai coklat. Untuk kayu lapis, konstruksi ringan, papan perumahan",
        "imge":"palapi.jpg",
        "link":'<a href="detail.html#palapi" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
    {
        "kayu":"Merawan",
        "desk":"Kayu berwarna kuning tua sampai kuning kemerah-merahan, mudah diproses, baik digergaji, diserut, maupun dibelah",
        "imge":"merawan.jpg",
        "link":'<a href="detail.html#merawan" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">'
    },
]

for (let i=0; i<8; i++){
    document.writeln('<div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink ">')
    document.writeln('<div class="flex-1 bg-white rounded-t rounded-b-none border overflow-hidden shadow">')
    document.writeln('<img src="img/'+ky[i]["imge"]+'"alt="" class="column">')
    document.writeln('<a href="#" class="flex flex-wrap no-underline hover:no-underline">')
    document.writeln('<div class="w-full font-bold text-xl text-gray-800 px-6">')
    document.writeln(ky[i]["kayu"])
    document.writeln('</div>')
    document.writeln('<p class="text-gray-800 text-base px-6 mb-5">')
    document.writeln(ky[i]["desk"])
    document.writeln('</p>')
    document.writeln('</a>')
    document.writeln('</div>')
    document.writeln('<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">')
    document.writeln('<div class="flex items-center justify-center">')
    document.writeln(ky[i]["link"])
    document.writeln('Selengkapnya')
    document.writeln('</a>')
    document.writeln('</div>')
    document.writeln('</div>')
    document.writeln('</div>')
}
