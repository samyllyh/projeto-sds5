import BarChat from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3"> Dashbord de vendas</h1>

                <div className="row px-3" >
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de secesso(%)</h5>
                        <BarChat />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de secesso(%)</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>

                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
