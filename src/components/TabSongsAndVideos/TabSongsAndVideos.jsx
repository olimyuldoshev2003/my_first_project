import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import songNumber1 from "../../songs/Ба пеш Камиль Нурматов.mp3";
import songNumber2 from "../../songs/Без лишних слов(feat JONY).mp3";
import songNumber3 from "../../songs/Вспомни - Камиль Нурматов.mp3";
import songNumber4 from "../../songs/Имруз Хит 2023  Камиль Нурматов.mp3";
import songNumber5 from "../../songs/Ишки Аввал Камиль Нурматов.mp3";
import songNumber6 from "../../songs/Камиль Нурматов - Сенёрита.mp3";
import songNumber7 from "../../songs/Кист_сарсупурдаи_ватан_Камиль_Нурматов.mp3";
import songNumber8 from "../../songs/Мой Рай - Камиль Нурматов.mp3";
import songNumber9 from "../../songs/потерпи 2023г.mp3";
import songNumber10 from "../../songs/Хушбахтам .mp3";
import songNumber11 from "../../songs/Ягона КамильНурматов.mp3";
import songNumber12 from "../../songs/Як табассум~Камиль Нурматов.mp3";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabSongsAndVideos() {
  const [value, setValue] = React.useState(0);

  //For translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={t("inModalS5.t2")} {...a11yProps(0)} />
          <Tab label={t("inModalS5.t3")} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="h-[59.6vh] overflow-auto">
        <div className="for_all_songs flex flex-col gap-4">
          <div className="song_1">
            <audio src={songNumber1} className="w-[100%]" controls></audio>
          </div>
          <div className="song_2">
            <audio src={songNumber2} className="w-[100%]" controls></audio>
          </div>
          <div className="song_3">
            <audio src={songNumber3} className="w-[100%]" controls></audio>
          </div>
          <div className="song_4">
            <audio src={songNumber4} className="w-[100%]" controls></audio>
          </div>
          <div className="song_5">
            <audio src={songNumber5} className="w-[100%]" controls></audio>
          </div>
          <div className="song_6">
            <audio src={songNumber6} className="w-[100%]" controls></audio>
          </div>
          <div className="song_7">
            <audio src={songNumber7} className="w-[100%]" controls></audio>
          </div>
          <div className="song_8">
            <audio src={songNumber8} className="w-[100%]" controls></audio>
          </div>
          <div className="song_9">
            <audio src={songNumber9} className="w-[100%]" controls></audio>
          </div>
          <div className="song_10">
            <audio src={songNumber10} className="w-[100%]" controls></audio>
          </div>
          <div className="song_11">
            <audio src={songNumber11} className="w-[100%]" controls></audio>
          </div>
          <div className="song_12">
            <audio src={songNumber12} className="w-[100%]" controls></audio>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}