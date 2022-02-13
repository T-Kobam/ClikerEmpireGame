// ディスプレイの表示
function displayBlock(ele) {
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

// ディスプレイの非表示
function displayNone(ele) {
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

// namespaseの設定
const config = {
    loginMenu: document.getElementById("login-menu"),
    mainMenu: document.getElementById("main-menu"),
    listPage: document.getElementById("item-list"),
    detailPage: document.getElementById("item-detail")
}

// アイテムのリスト (連想配列)
const itemLists = [
    {
        "item" : "Flip Machine",
        "value" : 15000,
        "src" : "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
        "amount" : 0,
        "earn" : 25,
        "max" : 500,
        "form" : "click",
        "id" : "flip-machine"
    },
    {
        "item" : "ETF Stock",
        "value" : 300000,
        "src" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "amount" : 0,
        "earn" : 0.1,
        "max" : "∞",
        "form" : "sec",
        "id" : "etf-stock"
    },
    {
        "item" : "ETF Bonds",
        "value" : 300000,
        "src" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "amount" : 0,
        "earn" : 0.07,
        "max" : "∞",
        "form" : "sec",
        "id" : "etf-bonds"
    },
    {
        "item" : "Lemonade Stand",
        "value" : 30000,
        "src" : "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
        "amount" : 0,
        "earn" : 30,
        "max" : 1000,
        "form" : "sec",
        "id" : "lemonade-stand"
    },
    {
        "item" : "Ice Cream Truck",
        "value" : 100000,
        "src" : "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
        "amount" : 0,
        "earn" : 120,
        "max" : 500,
        "form" : "sec",
        "id" : "ice-cream-truck"
    },
    {
        "item" : "House",
        "value" : 20000000,
        "src" : "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
        "amount" : 0,
        "earn" : 32000,
        "max" : 100,
        "form" : "sec",
        "id" : "house"
    },
    {
        "item" : "TownHouse",
        "value" : 40000000,
        "src" : "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
        "amount" : 0,
        "earn" : 64000,
        "max" : 100,
        "form" : "sec",
        "id" : "town-house"
    },
    {
        "item" : "Mansion",
        "value" : 250000000,
        "src" : "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
        "amount" : 0,
        "earn" : 500000,
        "max" : 20,
        "form" : "sec",
        "id" : "mansion"
    },
    {
        "item" : "Industrial Space",
        "value" : 1000000000,
        "src" : "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
        "amount" : 0,
        "earn" : 2200000,
        "max" : 10,
        "form" : "sec",
        "id" : "industrial-space"
    },
    {
        "item" : "Hotel Skyscraper",
        "value" : 10000000000,
        "src" : "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
        "amount" : 0,
        "earn" : 25000000,
        "max" : 5,
        "form" : "sec",
        "id" : "hotel-skyscraper"
    },
    {
        "item" : "Bullet-Speed Sky Railway",
        "value" : 10000000000000,
        "src" : "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
        "amount" : 0,
        "earn" : 30000000000,
        "max" : 1,
        "form" : "sec",
        "id" : "bullet-speed-sky-railway"
    },
];

// itemLists初期化
function initializeItemLists() {
    for (let i = 0; i < itemLists.length; i++) {
        itemLists[i].amount = 0;
        if (itemLists[i].id === "etf-stock") {
            itemLists[i].value = 300000;
        }
    }
}

// ユーザクラス
class User {
    
    name = null;
    age = 20;
    money = 50000;
    days = 1;

    constructor() {
        this.burger = new Burger();
        this.etf = new Etf();
    }

    initialize(name) {
        this.name = name
        this.age = 20;
        this.money = 50000;
        this.days = 0;
        this.burger.initialize();
        this.etf.initialize();
    }

    convertUser(json) {
        this.name = json.name;
        this.age = json.age;
        this.money = json.money;
        this.days = json.days;
        this.burger.convertBurger(json.burger);
        this.etf.convertEtf(json.etf);
    }
}

// Burgerクラス 
class Burger {
    click = 25;
    burgers = 0;

    initialize() {
        this.click = 25;
        this.burgers = 0;
    }

    convertBurger(json) {
        this.click = json.click;
        this.burgers = json.burgers;
    }
}

// ETFクラス
class Etf {
    totalStockMoney = 0;
    totalBondsMoney = 0;

    initialize() {
        this.totalStockMoney = 0;
        this.totalBondsMoney = 0;
    }

    convertEtf(json) {
        this.totalStockMoney = json.totalStockMoney;
        this.totalBondsMoney = json.totalBondsMoney;
    }
}

// ゲームスタート
createLoginMenu();

// ログイン画面の表示
function createLoginMenu() {
    config.loginMenu.innerHTML = "";
    config.loginMenu.innerHTML =
    `
        <div class="col-12 d-flex align-items-center flex-wrap justify-content-center p-1" id="login-menu">
            <div class="p-2 col-12">
                <h2 class="text-center">Clicker Empire Game</h2>
            </div>
            <div class="col-10 m-2">
                <input type="text" class="form-control" placeholder="Your name" id="login-name">
            </div>
            <div class="col-12 d-flex justify-content-center m-2">
                <button class="btn btn-primary col-5 m-2" id="new-btn">New</button>
                <button class="btn btn-primary col-5 m-2" id="login-btn">Login</button>
            </div>
        </div>
    `;

    let user = new User();
    // document.getElementById("new-btn").addEventListener("click", function() {
    document.getElementById("new-btn").onclick = function() {
        let name = config.loginMenu.querySelectorAll("#login-name")[0].value;
        if (name === "") {
            alert("Invaild");
            return;
        }

        // ユーザ新規作成
        user.initialize(name);

        // itemLists初期化
        initializeItemLists();

        // 画面表示
        createMainMenu(user);
        createBurgerInfo(user);
        createItemList(user);

        // 時間進行処理
        let intervalId = timeForward(user);

        // イベントリスナー処理
        listenerBurger(user);
        listenerSave(user, intervalId);
        listenerReset(user);
    };

    // document.getElementById("login-btn").addEventListener("click", function() {
    document.getElementById("login-btn").onclick = function() {
        let name = config.loginMenu.querySelectorAll("#login-name")[0].value;

        // 保存済のユーザ情報取得
        let json = JSON.parse(localStorage.getItem("loginName"));
        if (json === null) {
            alert("Don't exist data");
            document.getElementById("login-name").value = "";
            return;
        }
        let loginInfo = json[0].user;

        // 入力された名前と照合
        if (name !== loginInfo.name) {
            alert("Invaild");
            document.getElementById("login-name").value = "";
            return;
        }

        // ユーザ決定
        user.convertUser(loginInfo);

        // 画面表示
        createMainMenu(user);
        createBurgerInfo(user);
        createItemList(user);

        // 時間進行処理
        let intervalId = timeForward(user);

        // イベントリスナー処理
        listenerBurger(user);
        listenerSave(user, intervalId);
        listenerReset(user);    
    };
}

// メイン画面の表示
function createMainMenu(User) {
    // ログイン画面とメイン画面の切り替え
    displayNone(config.loginMenu);
    displayBlock(config.mainMenu);

    // ユーザ情報の設定・表示
    let userDetailContainer = document.getElementById("user-detail");
    userDetailContainer.innerHTML = "";
    userDetailContainer.innerHTML = 
    `
        <div class="p-1 pr-2 col-12 d-flex text-white text-center">
            <div class="bg-blue col-6 mr-1">
                <p>${User.name}</p>
            </div> 
            <div class="bg-blue col-6 mr-2" id="age">
                <p>${User.age} years old</p>
            </div> 
        </div>
        <div class="p-1 pr-2 col-12 d-flex text-white text-center">
            <div class="bg-blue col-6 mr-1" id="days">
                <p>${User.days} days</p>
            </div> 
            <div class="bg-blue col-6 mr-1" id="money">
                <p>¥${User.money}</p>
            </div> 
        </div>
    `;
}

// [TODO] : 同じ変数を各関数で宣言しているので、一元化する

// ハンバーガーの情報設定・表示
function createBurgerInfo(User) {
    let burgerDetailContainer = document.getElementById("burger-detail");
    burgerDetailContainer.innerHTML = "";
    let burgerP = document.createElement("p");
    burgerP.innerHTML = 
    `
        <p class="bg-blue mb-3">${User.burger.burgers} Burgers <br> one click ¥<span id="burger-click">${User.burger.click}</span></p>
    `;
    burgerDetailContainer.append(burgerP);
}

// ハンバーガーのclickイベント
function listenerBurger(User) {
    let userDetailContainer = document.getElementById("user-detail");
    let burgerDetailContainer = document.getElementById("burger-detail");

    // document.getElementById("burger-img").addEventListener("click", function() {
    document.getElementById("burger-img").onclick = function() {
        User.burger.burgers++;
        burgerDetailContainer.innerHTML = "";
        let p = document.createElement("p");
        User.money += User.burger.click;
        userDetailContainer.querySelectorAll("#money")[0].innerHTML = `<p>¥${User.money}</p>`;
        p.innerHTML = 
        `
            <p class="bg-blue mb-3">${User.burger.burgers} Burgers <br> one click ¥<span id="burger-click">${User.burger.click}</span></p>
        `;
        burgerDetailContainer.append(p);
    };
}

// セーブボタンのclickイベント
function listenerSave(User, intervalId) {
    // document.getElementById("save-btn").addEventListener("click", function() {
    document.getElementById("save-btn").onclick = function() {
        if (confirm("内容を保存しますがよろしいですか？")) {
            // 時間進行処理の停止
            clearInterval(intervalId);

            // JSON文字列の作成
            let jsonStr = `[{"user" : { "name" : "` + User.name + `", "age" : ` + User.age + `, "money" : ` + User.money + `, "days" : ` + User.days + `, "burger" : { "click" : ` + User.burger.click + `, "burgers" : ` + User.burger.burgers + ` }, "etf" : { "totalStockMoney" : ` + User.etf.totalStockMoney + `, "totalBondsMoney" : ` + User.etf.totalBondsMoney + `}}}]`;

            // JSONオブジェクトに変換
            let jsonDecoded = JSON.parse(jsonStr);

            // JSON文字列に変換(多分意味ない)
            let jsonEncoded = JSON.stringify(jsonDecoded);

            // 保存
            localStorage.setItem("loginName", jsonEncoded);

            // ログイン画面に戻る
            // createLoginMenu();
            document.getElementById("login-name").value = "";
            displayNone(config.mainMenu);
            displayBlock(config.loginMenu);
        }
    };
}

// resetボタンのclickイベント
function listenerReset(User) {
    // document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("reset-btn").onclick = function() {
        if (confirm("情報をリセットしますがよろしいですか？")) {
            // ユーザ情報初期化
            let name = User.name;
            User.initialize(name);

            // itemLists初期化
            initializeItemLists();

            // 保存しているJSON文字列を削除
            localStorage.removeItem("loginName");

            // 画面表示
            createMainMenu(User);
            createBurgerInfo(User);
            createItemList(User);
        }
    };
}

// ユーザの時間進行処理
function timeForward(User) {
    let userDetailContainer = document.getElementById("user-detail");
    let intervalId = setInterval(function() {
        User.days++;
        if (User.days === 365) {
            User.age++;
            User.days = 1;
            userDetailContainer.querySelectorAll("#age")[0].innerHTML = `<p>${User.age} years old</p>`;
        }
        userDetailContainer.querySelectorAll("#days")[0].innerHTML = `<p>${User.days} days</p>`;

        earnMoneyPerSecond(itemLists, User);

    }, 1000)

    return intervalId;
}

// アイテムリストの表示
function createItemList(User) {
    let itemListContainer = document.getElementById("item-list");
    itemListContainer.innerHTML = "";
    for (let i = 0; i < itemLists.length; i++) {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("bg-blue", "d-flex", "align-items-center", "text-white", "mb-1", "item-btn");

        itemContainer.innerHTML = 
        `
            <div class="col-3 text-center p-0">
                <img src="${itemLists[i].src}" width="100%">
            </div>
            <div class="col-5 text-left px-0>
                <p class="my-5">${itemLists[i].item} <br> ¥<span id="${itemLists[i].id}_value">${itemLists[i].value}</span></p>
            </div>
            <div class="col-4 text-right px-2">
                <p class="my-5"><span id="${itemLists[i].id}_amount">${itemLists[i].amount}</span> <br> <span class="text-green">¥<span id="${itemLists[i].id}_earn">${itemLists[i].earn}</span> /${itemLists[i].form}</span></p>
            </div>
        `;

        // clickイベントを追加
        // clickすると、詳細画面を表示する
        itemContainer.addEventListener("click", function() {
            displayNone(config.listPage);
            displayBlock(config.detailPage);

            showDetailPage(itemLists[i], User);
        });

        // itemListContainerに追加する
        itemListContainer.append(itemContainer);
    }
}

// アイテム詳細の表示
let itemDetailContainer = document.getElementById("item-detail");
function showDetailPage(item, User) {
    // HTMLの初期化
    itemDetailContainer.innerHTML = "";

    // アイテム詳細の設定
    itemDetailContainer.innerHTML = 
    `
        <div class="bg-blue mb-1 text-white p-2">
            <div class="d-flex justify-content-between align-items-center">
                <div class="col-6 text-white text-left p-0">
                    <p>${item.item} <br> Max purchases : ${item.max}</p>
                    <p>Price : ¥${item.value}</p>
                    <p>Get : ¥${item.earn} / ${item.form}</p>
                </div>
                <div class="col-6 text-center p-0">
                    <img src="${item.src}" width="50%" class="py-2">
                </div>
            </div>
            <div class="form-group">
                <label for="number">How many would you like to buy?</label>
                <input type="number" min="0" id="number" class="form-control" placeholder="0">
                <p class="text-right">total : ¥<span id="price">0</span></p>
            </div>
            <div class="d-flex justify-content-between">
                <div class="col-5 pl-0">
                    <button class="col-12 btn bg-light btn-outline-primary" id="back-btn">Go Back</button>
                </div>
                <div class="col-5 pr-0">
                    <button class="col-12 btn btn-primary" id="next-btn">Purchase</button>
                </div>
            </div>
        </div>
    `;

    // changeイベントの追加
    document.getElementById("number").addEventListener("change", function() {
        let price = document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML = item.value * parseInt(this.value);
    });

    // Go Backボタンのclickイベントの追加
    document.getElementById("back-btn").addEventListener("click", function() {
        displayNone(config.detailPage);
        displayBlock(config.listPage);
    });

    // Purchaseボタンのclickイベントの追加
    document.getElementById("next-btn").addEventListener("click", function() {
        let amount = parseInt(document.getElementById("number").value);
        purchase(User, item, amount);
    });

}

// Purchase処理
function purchase(User, item, amount) {
    // 無効な入力がない場合
    if (invalidNumber(amount)) {
        return;
    }

    // 所持金が購入金額に足りない場合
    let totalPrice = item.value * amount;
    if (User.money < totalPrice) {
        alert("You don't have enough money");
        displayNone(config.detailPage);
        displayBlock(config.listPage);
        return;
    }

    // 最大購入数を超える場合
    if (item.max != "∞") {
        if (item.amount + amount > item.max) {
            return invalidNumber(0);
        }
    }

    // 購入完了
    User.money -= totalPrice;
    item.amount += amount;
    
    // 処理
    // 画面情報の更新
    displayNone(config.detailPage);
    displayBlock(config.listPage);
    
    // アイテムの個数反映
    document.getElementById(item.id + "_amount").innerHTML = item.amount;

    // ユーザ所持金反映
    document.getElementById("money").innerHTML = "¥" + User.money;

    if (item.id === "etf-stock") {
        // 金額の変更を行う処理
        User.etf.totalStockMoney += totalPrice;
        item.value += item.value * 0.1;
        document.getElementById(item.id + "_value").innerHTML = item.value;
    }
    else if (item.id === "etf-bonds") {
        User.etf.totalBondsMoney += totalPrice;
    }
    else if (item.id === "flip-machine") {
        // クリックあたりの値段を増やす処理
        User.burger.click += amount * 25;
        document.getElementById("burger-click").innerHTML = User.burger.click;
    }
}

// 無効な数字に対しての処理
function invalidNumber(x) {
    if (x === 0) {
        alert("Invalid Number");
        displayNone(config.detailPage);
        displayBlock(config.listPage);
        return true;
    }
    if (isNaN(x)) {
        alert("Invalid Number");
        displayNone(config.detailPage);
        displayBlock(config.listPage);
        return true;
    }
    return false;
}

// 1秒ごとにお金を取得
function earnMoneyPerSecond(itemLists, User) {
    let userDetailContainer = document.getElementById("user-detail");
    for (let i = 0; i < itemLists.length; i++) {
        if (itemLists[i].amount === 0) {
            continue;
        }
        if (itemLists[i].id === "flip-machine") {
            continue;
        }

        if (itemLists[i].id === "etf-stock") {
            User.money += User.etf.totalStockMoney * 0.001;
        }
        else if (itemLists[i].id === "etf-bonds") {
            User.money += User.etf.totalBondsMoney * 0.0007;
        }
        else {
            User.money += itemLists[i].amount * itemLists[i].earn;
        }

        userDetailContainer.querySelectorAll("#money")[0].innerHTML = `<p>¥${User.money}</p>`;
    }
}