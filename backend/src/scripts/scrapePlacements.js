import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.brainwareuniversity.ac.in/placements/";

const scrape = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const text = $(".placement-content").text().trim();

  console.log(text);
};

scrape();
