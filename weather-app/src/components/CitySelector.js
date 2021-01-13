import React, { city, setCity } from "react";

function CitySelector({ setCity, city }) {
  const selectorSubmit = (e) => {
    setCity(e.target.value);
  };
  console.log(city);

  return (
    <select id="cities" name="cities" onChange={selectorSubmit}>
      <option value="istanbul">İstanbul</option>
      <option value="ankara">Ankara</option>
      <option value="izmir">İzmir</option>
      <option value="adana">Adana</option>
      <option value="adıyaman">Adıyaman</option>
      <option value="afyonkarahisar">Afyon</option>
      <option value="ağrı">Ağrı</option>
      <option value="aksaray">Aksaray</option>
      <option value="amasya">Amasya</option>
      <option value="antalya">Antalya</option>
      <option value="ardahan">Ardahan</option>
      <option value="artvin">Artvin</option>
      <option value="aydın">Aydın</option>
      <option value="balıkesir">Balıkesir</option>
      <option value="bartın">Bartın</option>
      <option value="batman">Batman</option>
      <option value="bayburt">Bayburt</option>
      <option value="bilecik">Bilecik</option>
      <option value="bingöl">Bingöl</option>
      <option value="bitlis">Bitlis</option>
      <option value="bolu">Bolu</option>
      <option value="burdur">Burdur</option>
      <option value="bursa">Bursa</option>
      <option value="çanakkale">Çanakkale</option>
      <option value="çankırı">Çankırı</option>
      <option value="çorum">Çorum</option>
      <option value="denizli">Denizli</option>
      <option value="diyarbakır">Diyarbakır</option>
      <option value="düzce">Düzce</option>
      <option value="edirne">Edirne</option>
      <option value="elazığ">Elazığ</option>
      <option value="erzincan">Erzincan</option>
      <option value="erzurum">Erzurum</option>
      <option value="eskişehir">Eskişehir</option>
      <option value="gaziantep">Gaziantep</option>
      <option value="giresun">Giresun</option>
      <option value="gümüşhane">Gümüşhane</option>
      <option value="hakkari">Hakkari</option>
      <option value="hatay">Hatay</option>
      <option value="ığdır">Iğdır</option>
      <option value="ısparta">Isparta</option>
      <option value="kahramanmaraş">Kahramanmaraş</option>
      <option value="karabük">Karabük</option>
      <option value="karaman">Karaman</option>
      <option value="kars">Kars</option>
      <option value="kastamonu">Kastamonu</option>
      <option value="kayseri">Kayseri</option>
      <option value="kırıkkale">Kırıkkale</option>
      <option value="kırklareli">Kırklareli</option>
      <option value="kırşehir">Kırşehir</option>
      <option value="kilis">Kilis</option>
      <option value="kocaeli">Kocaeli</option>
      <option value="konya">Konya</option>
      <option value="kütahya">Kütahya</option>
      <option value="malatya">Malatya</option>
      <option value="manisa">Manisa</option>
      <option value="mardin">Mardin</option>
      <option value="mersin">Mersin</option>
      <option value="muğla">Muğla</option>
      <option value="muş">Muş</option>
      <option value="nevşehir">Nevşehir</option>
      <option value="niğde">Niğde</option>
      <option value="ordu">Ordu</option>
      <option value="osmaniye">Osmaniye</option>
      <option value="rize">Rize</option>
      <option value="sakarya">Sakarya</option>
      <option value="samsun">Samsun</option>
      <option value="siirt">Siirt</option>
      <option value="sinop">Sinop</option>
      <option value="sivas">Sivas</option>
      <option value="şanlıurfa">Şanlıurfa</option>
      <option value="şırnak">Şırnak</option>
      <option value="tekirdağ">Tekirdağ</option>
      <option value="tokat">Tokat</option>
      <option value="trabzon">Trabzon</option>
      <option value="tunceli">Tunceli</option>
      <option value="uşak">Uşak</option>
      <option value="van">Van</option>
      <option value="yalova">Yalova</option>
      <option value="yozgat">Yozgat</option>
      <option value="zonguldak">Zonguldak</option>
    </select>
  );
}

export default CitySelector;
