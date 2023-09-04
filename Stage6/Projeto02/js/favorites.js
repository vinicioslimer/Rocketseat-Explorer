export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.entries = [
            {  
            login: "maykbrito",
            name: "Mayk Brito",
            public_repos: '76',
            folowers: '9589'
            },
            {
            login: "diego3g",
            name: "Diego Fernandes",
            public_repos: '94',
            folowers: '842'
            },
        ]  
    }

    delete(user) {
        const filtredEntries = this.entries.filter(entry => entry.login !== user.login);
        this.update();
    }
}



export class FavoritesView extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector("table tbody");
        
        this.update();
    }

    update() {
        this.removeAllTr();     
        
        this.entries.forEach(user => {
            const row = this.createRow();

            row.querySelector(".user img").src = `https://github.com/${user.login}.png`;
            row.querySelector(".user img").alt = `Foto de perfil de ${user.name}`;
            row.querySelector(".user p").textContent = user.name;
            row.querySelector(".user span").textContent = user.login;
            row.querySelector(".repositories").textContent = user.public_repos;
            row.querySelector(".followers").textContent = user.folowers;

            row.querySelector(".remove").onclick = () => {
                const isOk = confirm("Tem certeza que deseja remover este usuário?");
                if (isOk) {
                    this.delete(user);
                }
            };


            this.tbody.append(row);
        });        
        
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
                 <tr>
                    <td class="user">
                        <img src="https://github.com/maykbrito.png" alt="" srcset="">
                        <a href="https://github.com/maykbrito" target="_blank">
                            <p>Mayk Brito</p>
                            <span>maykbrito</span>
                        </a>
                    </td>
                    <td class="repositories">
                        76
                    </td>
                    <td class="followers">
                        9589
                    </td>
                    <td>
                        <button class="remove">&times;</button>
                    </td>
                </tr>
        `
        return tr
        
    }

    removeAllTr() {
        this.tbody.querySelectorAll("tr").forEach(tr => tr.remove());
    }
}

