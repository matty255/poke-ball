import _ from "lodash";
import translate from "../static/lang_list.json";

export const translateName = (id) => {
  let ko_name = _.find(translate, function (friend) {
    return friend.pokemon_species_id == id && friend.local_language_id === 3;
  });

  return ko_name?.name;
};
