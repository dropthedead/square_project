const userList = [
  {
    name: "Isabella Moran",
    id: "00222",
    pic: "/images/avatar_1.jpg",
    mail: "isabella_moran@mail.com",
  },
  {
    name: "Warren Craig",
    id: "00221",
    pic: "/images/avatar_1.jpg",
    mail: "warren_craig@mail.com",
  },
  {
    name: "Andrew Ellis",
    id: "00220",
    pic: "/images/avatar_1.jpg",
    mail: "andrew_ellis@mail.com",
  },
  {
    name: "Sam Conner",
    id: "00219",
    pic: "/images/avatar_1.jpg",
    mail: "sam_corner@mail.com",
  },
  {
    name: "Sam Conner",
    id: "00218",
    pic: "/images/avatar_1.jpg",
    mail: "sam_corner@mail.com",
  },
];

let currentItem = 0;

const userListBody = document.querySelector(".user-list__body");
const userListMore = document.querySelector(".user-list__more");

const createUser = (item) => {
  const html = `
    <div class="user-list__item" data-user-id="${item.id}">
        <div class="user-list__left">
        <div class="user-list__avatar">
            <img src="/images/avatar_1.jpg" />
        </div>
        <div class="user-list__info">
            <h3 class="user-list__name">${item.name}</h3>
            <p class="user-list__descr">Customer ID#${item.id}</p>
        </div>
        </div>
        <div class="user-list__right">
        <button class="user-list__action _mail">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.00008 4H20.0001C21.6569 4 23.0001 5.34315 23.0001 7V7.42743C23.0002 7.43617 23.0002 7.44489 23.0001 7.45362V18C23.0001 19.6569 21.6569 21 20.0001 21H4.00008C2.34323 21 1.00009 19.6569 1.00009 18V7.45358C0.999972 7.44488 0.999972 7.43618 1.00009 7.42747V7C1.00009 5.34315 2.34323 4 4.00008 4ZM3.00008 9.36205V18C3.00008 18.5523 3.4478 19 4.00008 19H20.0001C20.5524 19 21.0001 18.5523 21.0001 18V9.36205L13.7205 14.4578C12.6875 15.1809 11.3127 15.1809 10.2797 14.4578L3.00008 9.36205ZM20.9972 6.9228L12.5735 12.8193C12.2292 13.0603 11.7709 13.0603 11.4266 12.8193L3.00302 6.9228C3.04243 6.40659 3.47378 6 4.00008 6H20.0001C20.5264 6 20.9577 6.40659 20.9972 6.9228Z"
            />
            </svg>
        </button>
        <button class="user-list__action _deny">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6448 16.4564C19.5006 15.1829 20 13.6498 20 12C20 7.58172 16.4183 4 12 4C10.3488 4 8.8145 4.50023 7.54028 5.35741L18.6448 16.4564ZM17.3278 17.9679L6.0295 6.67511C4.76722 8.08945 4 9.95513 4 12C4 16.4183 7.58172 20 12 20C14.0463 20 15.9131 19.2317 17.3278 17.9679ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z"
            />
            </svg>
        </button>
        </div>
    </div>
    `;

  userListBody.innerHTML += html;
};

userListMore.addEventListener("click", (event) => {
  event.preventDefault();

  if (currentItem < userList.length) {
    createUser(userList[currentItem]);
    currentItem += 1;
  }
});