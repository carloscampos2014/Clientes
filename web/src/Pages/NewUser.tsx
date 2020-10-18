import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router';
import api from '../services/Api'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const NewUser = () => {
    const classes = useStyles();
    let history = useHistory();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event: any) => {
        event.persist();
        setValues({
            ...values,
            [event.target.name]:
                event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value
        });
    };


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await api.post(`/users/`, {
                name: values.name,
                email: values.email,
                password: values.password,
            });


            console.log(response.data, response.data._id);

            history.push(`/`);

        } catch (err) {
            alert("Houve um erro com a sua operação!");
        }

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastrar
            </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Voce já tem um conta? Entrar
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default NewUser;