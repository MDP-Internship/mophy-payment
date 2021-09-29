import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { editPayment } from "../store/actions";
import styled from "styled-components";

const EditModal = (props) => {
  const stringToDate = (dateString) => {
    const array = dateString.split(".");
    return new Date(
      parseInt(array[2]),
      parseInt(array[1] - 1),
      parseInt(array[0])
    );
  };

  const dateToString = (date) => {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const [id, setId] = useState(props.payment.id);
  const [date, setDate] = useState(stringToDate(props.payment.date));
  const [recipentName, setRecipentName] = useState(props.payment.recipent.name);
  const [email, setEmail] = useState(props.payment.email);
  const [serviceType, setServiceType] = useState(props.payment.serviceType);
  const [status, setStatus] = useState(props.payment.status);

  useEffect(() => {
    setId(props.payment.id);
    setDate(stringToDate(props.payment.date));
    setRecipentName(props.payment.recipent.name);
    setEmail(props.payment.email);
    setServiceType(props.payment.serviceType);
    setStatus(props.payment.status);
  }, [props]);

  const handleSubmit = () => {
    dispatch(
      editPayment({
        id,
        date: dateToString(date),
        recipent: {
          name: recipentName,
        },
        email,
        serviceType,
        status,
      })
    );
    props.handleClose();
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <TextField
              disabled
              style={{ margin: "10px 0" }}
              label="ID"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <KeyboardDatePicker
              style={{ margin: "10px 0" }}
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <TextField
              style={{ margin: "10px 0" }}
              label="Recipent"
              value={recipentName}
              onChange={(event) => setRecipentName(event.target.value)}
            />
            <TextField
              style={{ margin: "10px 0" }}
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              style={{ margin: "10px 0" }}
              label="Service Type"
              value={serviceType}
              onChange={(event) => setServiceType(event.target.value)}
            />
            <TextField
              style={{ margin: "10px 0" }}
              label="Status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
            <Button onClick={handleSubmit}>Kaydet</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default EditModal;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    boxShadow: theme.shadows[20],
    padding: "50px",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
  },
}));

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 12px 23px rgba(62, 73, 84, 0.04);
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }

  background: #1eaae7;
`;
