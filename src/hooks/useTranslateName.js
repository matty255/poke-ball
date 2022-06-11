import _ from "lodash";
import translate from "../static/lang_list.json";

export const translateName = (id, lang) => {
  let ko_name = _.find(translate, function (friend) {
    return friend.pokemon_species_id == id && friend.local_language_id === lang;
  });

  return ko_name?.name;
};

export const FindGenus = (id, lang) => {
  let ko_name = _.find(translate, function (friend) {
    return friend.pokemon_species_id == id && friend.local_language_id === lang;
  });

  return ko_name?.genus;
};
