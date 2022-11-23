import Table from "../table/Table";
import { useState } from "react";
import { getRequest } from "../../js/getData";
import MainPage from "../table/MainPage";
import CreateButton from "../table/CreateBotton";
import SearchBar from "../table/SearchBar";
import BodyIndex from "./bodyIndex";
import { useEffect } from "react";
import { loadData } from "../../js/getData";
import backendConfig from "../../config";
let objCss = {
    border: "6px solid red",
};

function UsuariosIndex(props) {
    let data = loadData();
    const [datosTabla, setDatosTabla] = useState(data);
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");
    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "usuarios/all",
            {},
            "get",
            {}
        );
        promiseData
            .then(function (response) {
                console.log(response);
                setState("loaded");
                setDatosTabla(response.data);
            })
            .catch(function (err) {
                setState("error");
                setError(err);
                console.log(err);
            });
    }, []);
    if (state === "error") {
        return (
            <div className="mx-3 d-flex">
                <h3>{error.toString()}</h3>
            </div>
        );
    }
    if (state === "loading") {
        return (
            <div className="mx-3 d-flex">
                <h3>Loading...</h3>
            </div>
        );
    }
    return <BodyIndex datosTabla={datosTabla}></BodyIndex>;
    //procesar datos
}

export default UsuariosIndex;
