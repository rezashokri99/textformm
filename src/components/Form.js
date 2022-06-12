import axios from "axios";
import { useEffect, useState } from "react";
import CitySelectBox from "./CitySelectBox";
import FieldSelectBox from "./FieldSelectBox";
import ProvinceSelectBox from "./ProvinceSelectBox";
import swal from 'sweetalert';
import ClipLoader from "react-spinners/ClipLoader";



const url1 = "https://api.nimkatedu.ir/api/sanctum/csrf-cookie";
const url2 = "https://api.nimkatedu.ir/send-province-and-city-and-other-items";

const Form = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [university, setUniversity] = useState("");
    const [provinces, setProvinces] = useState([]);
    const [province_id, setProvince_id] = useState();
    const [province_name, setProvince_name] = useState();
    const [cities, setCities] = useState([]);
    const [city_id, setCity_id] = useState();
    const [city_name, setCity_name] = useState();
    const [fields, setField] = useState([]);
    const [field_id, setField_id] = useState();
    const [field_name, setField_name] = useState();
    const [submitLoading, setSubmitLoading] = useState(false);
    const [disaleBtn, setDisaleBtn] = useState(false);

    useEffect(() => {
        const getData = () => {
            axios.get(url1).then((res) =>
                axios.get(url2).then((response) => {
                    setProvinces(response.data.province)
                    setField(response.data.fields)
                })
            );
        };
        getData();
    }, []);

    // add cities when choiced province
    useEffect(() => {
        provinces?.map((province, index) => {

            if (province.id === (+province_id)) {
                setCities(province.children)
            } else if (province_id === "none") {
                setCities([])
                setCity_id("none")
            }

        })
    }, [province_id, provinces, province_name])


    const submitHandler = (e) => {
        e.preventDefault();

        // validate inputs
        if (name.trim() === "") {
            swal("خطا!", "نام و نام خانوادگی را وارد کنید!", "error", { button: "باشه.", });
        } else if (phone.trim() === "") {
            swal("خطا!", "شماره تماس را وارد کنید!", "error", { button: "باشه.", });
        } else if (fieldOfStudy.trim() === "") {
            swal("خطا!", "رشته تحصیلی دانشگاه را وارد کنید!", "error", { button: "باشه.", });
        } else if (university.trim() === "") {
            swal("خطا!", "نام دانشگاه را وارد کنید!", "error", { button: "باشه.", });
        } else if (field_id === undefined || field_id === "none") {
            swal("خطا!", "رشته را انتخاب کنید!", "error", { button: "باشه.", });
        } else if (province_id === undefined || province_id === "none") {
            swal("خطا!", "استان را انتخاب کنید!", "error", { button: "باشه.", });
        } else if (city_id === undefined || city_id === "none") {
            swal("خطا!", "شهر را انتخاب کنید!", "error", { button: "باشه.", });
        }
        else {
            setSubmitLoading(true)
            setDisaleBtn(true)
            axios.get("https://api.nimkatedu.ir/api/sanctum/csrf-cookie")
                .then(res => {
                    
                    axios
                        .post("https://api.nimkatedu.ir/register-advisor", {
                            name,
                            phone,
                            fields: fieldOfStudy,
                            university,
                            field_id,
                            province_id,
                            city_id,
                        })
                        .then(response => {
                            console.log(response);
                            if (response.data.data === "ok") {
                                setSubmitLoading(false)
                                setDisaleBtn(true)
                                swal("تبریک!", "اطلاعات شما با موفقیت ثبت گردید", "success", { button: "باشه.", });
                                setTimeout(() => {
                                    window.location.reload()
                                }, 2000);
                            }

                        })
                        .catch(err => {
                            setSubmitLoading(false)
                            setDisaleBtn(false)
                            const errors = err.response.data.errors;
                            swal("خطا!", errors[Object.keys(errors)[0]][0], "error", { button: "باشه.", });
                        })
                })
                .catch(err => console.log(err))

        }

    }


    return (
        <form id="form" onSubmit={submitHandler} className="font-sans w-11/12 lg:w-[550px] p-5 bg-[#f5f5f5] border-[5px] border-dashed border-[#485460] rounded-[10px]">

            <div className="flex flex-col font-sans">
                <label className="text-[#485460] text-[21px] font-bold">نام و نام خانوادگی</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="m-[10px] py-[10px] outline-none border-[.5px] border-[#cfc9c9] rounded-[14px] font-medium text-center" type="text" />
            </div>

            <div className="flex flex-col font-sans">
                <label className="text-[#485460] text-[21px] font-bold">شماره همراه</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="m-[10px] py-[10px] outline-none border-[.5px] border-[#cfc9c9] rounded-[14px] font-medium text-center" type="number" />
            </div>

            <div className="flex flex-col font-sans">
                <label className="text-[#485460] text-[21px] font-bold">رشته تحصیلی دانشگاه</label>
                <input value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} className="m-[10px] py-[10px] outline-none border-[.5px] border-[#cfc9c9] rounded-[14px] font-medium text-center" type="text" />
            </div>

            <div className="flex flex-col font-sans">
                <label className="text-[#485460] text-[21px] font-bold">نام دانشگاه</label>
                <input value={university} onChange={(e) => setUniversity(e.target.value)} className="m-[10px] py-[10px] outline-none border-[.5px] border-[#cfc9c9] rounded-[14px] font-medium text-center" type="text" />
            </div>

            <div className="flex flex-col font-sans">
                <label className="text-[#485460] text-[21px] font-bold">رشته تحصیلی</label>
                <div className="m-[10px]">
                    <FieldSelectBox fields={fields} setField_id={setField_id} field_name={field_name} setField_name={setField_name} />
                </div>
            </div>


            <div className="flex flex-col font-sans ">
                <label className="text-[#485460] text-[21px] font-bold">استان</label>
                <div className="m-[10px]">
                    <ProvinceSelectBox provinces={provinces} setProvince_id={setProvince_id} province_name={province_name} setProvince_name={setProvince_name} />
                </div>
            </div>

            <div className="flex flex-col font-sans ">
                <label className="text-[#485460] text-[21px] font-bold">شهر</label>
                <div className="m-[10px]">
                    <CitySelectBox cities={cities} setCity_id={setCity_id} city_name={city_name} setCity_name={setCity_name} />
                </div>
            </div>

            <button disabled={disaleBtn} type="submit" className={`${disaleBtn ? "bg-yellow-200 text-yellow-700" : "text-white bg-[#f2c12a]"}   relative mt-5 w-full p-5 font-bold text-lg border-[3px] border-white rounded-2xl shadow-[2px_5px_5px_#888]`}>
                <div className="absolute w-[100px] top-[18px] left-[145px]" >
                    <ClipLoader className="block my-0 mx-auto border-yellow-700" color={"#a16207"} loading={submitLoading} size={32} />
                </div>
                <span>ثبت نام</span>
            </button>
        </form>
    );
}

export default Form;