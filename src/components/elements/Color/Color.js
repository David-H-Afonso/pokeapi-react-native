export const Color = (type) => {
    switch (type) {
      case "fairy": {
        return {bgColor: "#fdb9e9", color: "#000000"};
      }
      case "dark": {
        return {bgColor: "#707070", color: "#ffffff"};
      }
      case "dragon": {
        return {bgColor: "#53a4cf", color: "#ffffff"};
      }
      case "steel": {
        return {bgColor: "#9eb7b8", color: "#000000"};
      }
      case "ghost": {
        return {bgColor: "#7b62a3", color: "#ffffff"};
      }
      case "bug": {
        return {bgColor: "#729f3f", color: "#ffffff"};
      }
      case "ice": {
        return {bgColor: "#51c4e7", color: "#ffffff"};
      }
      case "psychic": {
        return {bgColor: "#f366b9", color: "#ffffff"};
      }
      case "rock": {
        return {bgColor: "#a38c21", color: "#ffffff"};
      }
      case "ground": {
        return {bgColor: "#ab9842", color: "#ffffff"};
      }
      case "electric": {
        return {bgColor: "#eed535", color: "#000000"};
      }
      case "poison": {
        return {bgColor: "#b97fc9", color: "#ffffff"};
      }
      case "fighting": {
        return {bgColor: "#d56723", color: "#ffffff"};
      }
      case "flying": {
        return {bgColor: "#3dc7ef", color: "#000000"};
      }
      case "grass": {
        return {bgColor: "#9bcc50", color: "#000000"};
      }
      case "water": {
        return {bgColor: "#4592c4", color: "#ffffff"};
      }
      case "fire": {
        return {bgColor: "#fd7d24", color: "#ffffff"};
      }
      case "normal": {
        return {bgColor: "#a4acaf", color: "#000000"};
      }
      default:  return {bgColor: "#ffffff", color: "#000000"};
    }
  };