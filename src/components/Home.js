import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { getKits } from '../features/kitsSlice'
import { selectKit } from '../features/kitSlice'
import { getDays, getMonths, getYears } from '../utils/date'
import { findKit } from '../utils/kit'

export default function Home() {
    let history = useHistory();
    const dispatch = useDispatch()
    const kits = useSelector((state) => state.kits.kits)
    const [days, setDays] = useState([])
    const [months, setMonths] = useState([])
    const [years, setYears] = useState([])
    const [selectedDay, setSelectedDay] = useState('Day')
    const [selectedMonth, setSelectedMonth] = useState('Month')
    const [selectedYear, setSelectedYear] = useState('Year')

    useEffect(() => {
        dispatch(getKits())
        setDays(getDays())
        setMonths(getMonths())
        setYears(getYears())
    },[])

    const monthsOnChange = (e) => {
        let month = e.target.value
        setSelectedMonth(month)
        setDays(getDays(selectedYear, month))
    }
    const yearsOnChange = (e) => {
        let year = e.target.value
        setSelectedYear(year)
        setDays(getDays(year, selectedMonth))
    }
    const daysOnChange = (e) => {
        setSelectedDay(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault()
        if (
            selectedMonth !== 'Month' &&
            selectedDay !== 'Day' &&
            selectedYear !== 'Year'
        ) {
            let birthDate = {
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay
            }
            let selectedKit = findKit(birthDate, kits)
            let path = selectedKit.kit.title.toLocaleLowerCase().split(' ').join('-')
            path = `/products/${path}`
            history.push(path);
            dispatch(selectKit(selectedKit))
        }
    }

    return (
        <Container>
            <Wrraper>
                <Title><TitleBlue>Start</TitleBlue> at the right stage</Title>
                <Description>Lovevery delivers fresh play for every stage of your child's brain development. Enter your child's name and birth date / due date / adjusted birth date to discover the perfect Play Kits.</Description>
                <Form onSubmit={formSubmit}>
                    <SelectWrapper>
                        <Select 
                            onChange={monthsOnChange}
                            value={selectedMonth}
                        >
                            {months.map((month, index) => (
                                <Option key={index}>
                                    {month}
                                </Option>
                            ))}
                        </Select>
                        <Select 
                            onChange={daysOnChange}
                            value={selectedDay}
                        >
                            {days.map((day, index) => (
                                <Option key={index}>
                                    {day}
                                </Option>
                            ))}
                        </Select>
                        <Select 
                            onChange={yearsOnChange}
                            value={selectedYear}
                        >
                            {years.map((year, index) => (
                                <Option key={index}>
                                    {year}
                                </Option>
                            ))}
                        </Select>
                    </SelectWrapper>
                    <Submit
                        type={'submit'}
                        value={'Submit'}
                    />
                </Form>                   
            </Wrraper>
        </Container>
    )
}



const SelectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
`

const Submit = styled.input`
    padding: 1rem;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    min-height: 50px;
    color: #fff;
    background-color: #536dc4;
    font-size: 18px;
    line-height: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const Select = styled.select`
    width: 32%;
    height: 60px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid #514f4e;
    color: #514f4e;
    background-color: transparent;
    font-size: 1rem;
    @media only screen and (max-width: 720px) {
        width: 90%;
    }
`
const Option = styled.option`
`

const Wrraper = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`

const Description = styled.p`
    font-size: 1rem;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px 0;
    font-weight: 300;
    max-width: 600px;
    margin: 20px auto;
`

const Title = styled.h2`
    color: #514f4e;
    letter-spacing: 1px;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    font-weight: 500;
`
const TitleBlue = styled.span`
    color: #536dc4;
`

const Container = styled.main`
    padding-top: 70px;
    width: 100%;
    height: 80vh;
    min-height: 650px;
    background-color: #fefbef;
`