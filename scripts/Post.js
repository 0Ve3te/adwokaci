const parent = document.getElementById('parentNews');

class Post {
    constructor(username, avatar, text, img, date, hrefProfile) {
        this.username = username;
        this.avatar = avatar;
        this.description = text;
        this.img = img;
        this.date = date;
        this.hrefProfile = hrefProfile;

        if(this.hrefProfile === null)
            this.hrefProfile = '#News';

        this.createPost();
        // console.log(`Obiekt Post zostal utworzony, username: ${this.username} avatar: ${this.avatar}, text do zdjecia: ${this.description}, zdjecie: ${this.img}, date: ${this.date}.`);
    }

    createPost() {
        const divCol = document.createElement('div');
        divCol.className = 'col-12 col-md-6 col-lg-4 card card-no-cursor m-3';
        divCol.style.maxWidth = '540px';

        const row1 = document.createElement('div');
        row1.className = 'row g-0';

        const col1 = document.createElement('div');
        col1.className = 'col';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';

        const avatar = document.createElement('img');
        avatar.src = this.avatar;
        avatar.className = 'rounded-circle me-3';
        avatar.style.maxWidth = '50px';
        avatar.style.marginLeft = '0';
        avatar.alt = 'user avatar img';

        const linkProfile = document.createElement('a');
        linkProfile.href = this.hrefProfile;
        linkProfile.target = '_newblank';

        const name = document.createElement('span');
        name.className = 'text-primary';
        name.innerHTML = this.username;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.innerText = this.description;

        const row2 = document.createElement('div');
        row2.className = 'row g-0';

        const col2 = document.createElement('div');
        col2.className = 'col';

        const imgDesc = document.createElement('img');
        imgDesc.src = this.img;
        imgDesc.className = 'rounded-start ms-3';
        imgDesc.alt = 'User photo';
        imgDesc.width = "300";
        imgDesc.height = "300";

        const addedTime = document.createElement('p');
        addedTime.className = 'card-text';

        const addedTimeVal = document.createElement('small');
        addedTimeVal.className = 'text-muted ms-3';
        addedTimeVal.innerText = `Dodano: ${this.date} r.`;

        h5.appendChild(avatar);
        linkProfile.appendChild(name);
        h5.append(linkProfile);
        cardBody.appendChild(h5);
        cardBody.appendChild(description);
        col1.appendChild(cardBody);
        row1.appendChild(col1);

        addedTime.appendChild(addedTimeVal);
        col2.appendChild(imgDesc);
        col2.appendChild(addedTime);
        row2.appendChild(col2);

        divCol.appendChild(row1);
        divCol.appendChild(row2);

        parent.appendChild(divCol);
    }
}