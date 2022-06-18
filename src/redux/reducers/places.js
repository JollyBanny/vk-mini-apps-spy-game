const initialState = {
  places: [
    {
        id: 1,
        label: "Задний двор",
    },
    {
        id: 2,
        label: "Кладбище",
    },
    {
        id: 3,
        label: "Стадион",
    },
    {
        id: 4,
        label: "Бассейн",
    },
    {
        id: 5,
        label: "Кинотеатр",
    },
    {
        id: 6,
        label: "Спа-салон",
    },
    {
        id: 7,
        label: "Кампус ДВФУ",
    },
    {
        id: 8,
        label: "Дом компании «Зингер»",
    },
  ],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLACES":
      return {
        ...state,
        places: action.payload,
      };

    default:
      return state;
  }
};

export default places;
