import Table from "../table/Table";
import { useState } from "react";
import { getRequest } from "../../js/getData";
import MainPage from "../table/MainPage";
import CreateButton from "../table/CreateBotton";
import SearchBar from "../table/SearchBar";
let objCss = {
    border: "6px solid red",
};
function BodyIndex(props) {
    return (
        <div>
            <h3>Usuarios</h3>
            <p style={objCss}>
                Bienvenidos a la pagina de administracion de usuarios
            </p>
            <MainPage
                data={props.datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["_id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div className="d-flex">
                <div className="col-6">
                    <Table />
                </div>
                <div className="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}

export default BodyIndex;
