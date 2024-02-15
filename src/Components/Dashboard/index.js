import { Component } from "react";
import NavigateNavbar from "../NavigateNavbar";
import "./index.css";
import NavigateHomePage from "../NavigateHomePage";

class Dashboard extends Component {
    state = {
        isIncomeAvailable: false,
        income: 0,
        setIncome: "",
        expenses: 0,
        transactionForm: false,
        logoutClicked: false,
        transactionAmount: "",
        transactionDate: "",
        transactionCategory: "Housing",
        transactionsList: [
            {
                transactionAmount: "2000",
                transactionCategory: "Housing",
                transactionDate: "2024-10-2",
            },
        ],
    };

    componentDidMount() {
        const income = localStorage.getItem("income");
        if (income !== null) {
            this.setState({ isIncomeAvailable: true, income });
        }
    }
    onClickCancleLogout = () => {
        this.setState({ logoutClicked: false });
    };
    displayLogout = () => {
        return <NavigateNavbar onClickCancleLogout={this.onClickCancleLogout} />;
    };
    onClickLogout = () => {
        this.setState({ logoutClicked: true });
    };
    onChangeIncome = (event) => {
        event.preventDefault();
        this.setState({ setIncome: parseInt(event.target.value) });
    };
    onClickEditBtn = () => {
        localStorage.removeItem("income");
        this.setState({ isIncomeAvailable: false, income: 0, setIncome: "" });
    };
    onClickDoneBtn = () => {
        const { setIncome } = this.state;
        if (setIncome !== "") {
            localStorage.setItem("income", setIncome);
            this.setState({ isIncomeAvailable: true }, this.componentDidMount);
        } else {
            alert("Income should be greater than zero");
        }
    };
    onChangeAddTransAmount = (e) => {
        this.setState({ transactionAmount: e.target.value });
    };
    onChangeAddTransDate = (e) => {
        this.setState({ transactionDate: e.target.value });
    };
    onChangeAddTransCategory = (e) => {
        this.setState({ transactionCategory: e.target.value });
    };
    onClickCancleTransactionBtn = () => {
        this.setState({ transactionForm: false, transactionAmount: "", transactionDate: "", transactionCategory: "Housing" });
    };
    onClickAddTransactionBtn = () => {
        this.setState({ transactionForm: true });
    };

    addExpenses = () => {
        const { transactionsList } = this.state;
        let a = 0;
        transactionsList.forEach((item) => {
            console.log(item.transactionAmount);
            a += parseInt(item.transactionAmount);
        });
        this.setState({ expenses: a.toString() });
    };
    onClickAddTransaction = (e) => {
        e.preventDefault();
        const { transactionAmount, transactionDate, transactionCategory } = this.state;
        const transaction = {
            transactionAmount,
            transactionCategory,
            transactionDate,
        };
        this.setState(
            (prevState) => ({
                transactionsList: [...prevState.transactionsList, transaction],
                transactionAmount: "",
                transactionDate: "",
                transactionCategory: "Housing",
                transactionForm: false,
            }),
            this.addExpenses
        );
    };
    displayTransactionForm = () => {
        const { transactionAmount, transactionCategory, transactionDate } = this.state;
        return (
            <div className="trans-form-div">
                <form onSubmit={this.onClickAddTransaction} className="trans-form">
                    <h1>Add Transaction</h1>
                    <div className="trans-form-div2">
                        <label>Category</label>
                        <select value={transactionCategory} onChange={this.onChangeAddTransCategory}>
                            <option value="Housing">Housing</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Food">Food</option>
                            <option value="Shopping">Shopping</option>
                        </select>
                        <label>Amount</label>
                        <input
                            value={transactionAmount}
                            onChange={this.onChangeAddTransAmount}
                            type="number"
                            placeholder="Enter Transaction Amount"
                            required
                        />
                        <label>Date</label>
                        <input
                            required
                            value={transactionDate}
                            onChange={this.onChangeAddTransDate}
                            type="date"
                            placeholder="Select Transaction Date"
                        />
                    </div>
                    <div className="trans-btns-div">
                        <button type="submit">Add Transaction</button>
                        <button onClick={this.onClickCancleTransactionBtn}>Cancle</button>
                    </div>
                </form>
            </div>
        );
    };

    render() {
        const { isIncomeAvailable, setIncome, income, expenses, transactionForm, transactionsList, logoutClicked } = this.state;
        const userDetails = localStorage.getItem("loginDetails");
        if (userDetails === null) {
            return <NavigateHomePage />;
        }
        return (
            <div className="dash-main-container">
                <div className="dash-sub-container">
                    <div className="dash-navbar">
                        <h1>MoneyMate</h1>
                        <button onClick={this.onClickLogout}>Logout</button>
                    </div>
                    <div className="details-container">
                        <div className="dets">
                            <p>Monthly Income</p>
                            {isIncomeAvailable ? (
                                <>
                                    <p className="income">{income}</p>
                                    <button className="edit" onClick={this.onClickEditBtn}>
                                        Edit
                                    </button>
                                </>
                            ) : (
                                <>
                                    <input
                                        value={setIncome}
                                        onChange={this.onChangeIncome}
                                        type="number"
                                        placeholder="Enter Your Monthly Income"
                                    />
                                    <button className="done" onClick={this.onClickDoneBtn}>
                                        Done
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="dets">
                            <p>Total Expenses</p>
                            <p>{expenses}</p>
                        </div>
                        <div className="dets">
                            <p>Balance</p>
                            <p>{parseInt(income) - parseInt(expenses)}</p>
                        </div>
                    </div>
                    <div className="add-trans-div" onClick={this.onClickAddTransactionBtn}>
                        Add Transaction
                    </div>
                    <h1 className="trans-heaidng">Transactions</h1>
                    <ul className="transactions-div">
                        {transactionsList.map((transaction) => {
                            return (
                                <li key={transaction.transactionAmount}>
                                    <div>
                                        <h1 className="list-cat">{transaction.transactionCategory}</h1>
                                        <p className="list-date">{transaction.transactionDate}</p>
                                    </div>
                                    <h1 className="list-amount">{transaction.transactionAmount}</h1>
                                </li>
                            );
                        })}
                    </ul>
                    {transactionForm && this.displayTransactionForm()}
                    {logoutClicked && this.displayLogout()}
                </div>
            </div>
        );
    }
}

export default Dashboard;
