function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // 1. Lakukan for loop data yang didalam array
  // 2. Cek data available yang bernilai true
  // 3. Jika sudah lakukan push data yang bernilai true kedalam array result yang telah dibuat
  for (let i = 0; i < cars.length; i++) {
    // Cari berdasarkan nilai true
    if (cars[i].available === true) {
      //Push nilai cars yang true kedalam tampungan
      result.push(cars[i]);
    }
  }
  return result;
}
