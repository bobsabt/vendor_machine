import { Screen } from "./Screen"
import { Touchpad } from "./Touchpad"
import React from "react"
import { Stack } from "../layout/Stack"
import Coin from "./Coin"
import { Text } from "../layout/Text"
import  common  from "../Text/common.json"
import styled from "@emotion/styled"
import { Box } from "../layout/Box"

interface KeyPadAreaProps {
        data: {
            id: string,
            place: string,
            name: string,
            numberOfItem: number,
            price: number,
            imgSrc: string
        }[],
        setData: (value: any) => void, 
        setSelectedItem: (value?: any) => void
}

type PressedItemCode = {
    twenty: string, 
    ten: string, 
    five: string
}

export const KeyPadArea: React.FC<KeyPadAreaProps> = ({ data, setData, setSelectedItem }) => {
    const [sumOfMoney, setSumOfMoney] = React.useState<number>(0)
    const [pressedItemCode, setPressedItemCode] = React.useState<string | null>()
    const [refundedMoney, setRefundedMoney] = React.useState<PressedItemCode | null>()
    const [isChangeVisible, setIsChangeVisible] = React.useState<boolean>(false)
    const [isTouchPadActive, setIsTouchPadActive] = React.useState<boolean>(false)
    const [screenMsg, setScreenMsg] = React.useState<string>(common.select_coins)

    const buttonvaluesIn = [200, 100, 50]
    const buttonvaluesOut = [20, 10, 5]

    const onHandleClickSumMoney = (event: any) => { 
        if(sumOfMoney >= 1000) return
        const sum = sumOfMoney + parseInt(event.currentTarget.value)
        setSelectedItem()
        setIsChangeVisible(false)
        setSumOfMoney(sum)
        setRefundedMoney(null)

        let findPriceOBJ = data.find(item => item.price <= sum)

        if (findPriceOBJ !== undefined) {
            setScreenMsg(common.select_item)
            setIsTouchPadActive(true)
        }
    }

    const onHandleClickRefundButton = () => {
        getRefundMoney(sumOfMoney)
        setSumOfMoney(0)
        setPressedItemCode(null)
        setIsChangeVisible(true)
        setScreenMsg(common.select_coins)
        setIsTouchPadActive(false)
    }

    const onHandleClickTouchButton = (event: React.FormEvent<HTMLInputElement>) => {
        if (!pressedItemCode && event.currentTarget.value !== 'Clear') {
            setPressedItemCode(event.currentTarget.value)
            return
        } 

        if (event.currentTarget.value === 'Clear') {
            setPressedItemCode('')
            setScreenMsg(common.select_item)
            return
        }
            
        let selectItemCode = pressedItemCode?.toString() + event.currentTarget.value.toString()

        if (selectItemCode.length <= 2 ) {
            setPressedItemCode(selectItemCode)
        }

        if (selectItemCode.length === 2 ) {
            let selectedItemGroup = data.find(item => item.place === selectItemCode)

            if (selectedItemGroup === undefined ) {
                setScreenMsg(common.not_valid_itemcode)
                return
            }

            if (selectedItemGroup !== undefined && selectedItemGroup.numberOfItem > 0 && selectedItemGroup.price <= sumOfMoney) {
                let numberOfSelectedItemGroup = selectedItemGroup.numberOfItem
                selectedItemGroup.numberOfItem = numberOfSelectedItemGroup.valueOf() - 1

                const modifiedData = data.map(item => {
                    if (item.id === selectedItemGroup?.id) {
                        item = selectedItemGroup
                    }
                    return item
                })    

                setData(modifiedData)
                setSelectedItem({"name": selectedItemGroup.name, "imgSrc": selectedItemGroup.imgSrc})
                setPressedItemCode(null)
                setSumOfMoney(0)
                setScreenMsg(common.select_coins)
                getRefundMoney(sumOfMoney, selectedItemGroup.price)
                setIsTouchPadActive(false)
                setIsChangeVisible(true)
            } else {
                setScreenMsg(common.empty_item_selected)
                setPressedItemCode('')
            }
        }
       
    }

    const getRefundMoney = (money:number, price?:number) =>{
        if (price) { 
            money = money - price
        }

        let temp20 = (money - money % 20) / 20;
        money = money - temp20 * 20

        let temp10 = (money - money % 10) / 10;
        money = money - temp10 * 10

        let temp5 =(money - money % 5) / 5;
        money = money - temp5 * 5

        setRefundedMoney({twenty: temp20+'X', ten: temp10+'X', five: temp5+'X'})
    }

    return(
        <Stack>
            <Screen clickedButtonValue={ pressedItemCode ?? sumOfMoney}/>
            <StyledText variant="h2">{screenMsg}</StyledText>
            <Stack flexDirection={{xs:"column", sm:"row", md:"column"}} alignItems={{xs:"center", sm:"normal"}} justifyContent="center">
                <Box>
                    <Stack flexDirection={{xs:"row", sm:"column", md:"row"}} alignItems="center" justifyContent="space-between" spacing={0} gap={2} padding="1rem 2rem">
                        <Text textAlign="left">Coins accepted</Text>
                        <Stack flexDirection="row" alignItems="center" gap={2} >
                            {buttonvaluesIn.map(button => <Coin key={button} buttonvalue={button} onClick={onHandleClickSumMoney} disabled={typeof(pressedItemCode) === 'string' ? true : false }/>)}
                        </Stack>
                    </Stack>
                    <Stack flexDirection="column" alignItems="flex-end" justifyContent="space-between" spacing={0} gap={2} padding="0 2rem">
                        <Stack flexDirection={{xs:"row", sm:"column", md:"row"}} alignItems="center" justifyContent="space-between" gap={{xs:10, sm:2, md:10}}>
                            <Text>Change</Text>
                            <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={2}>
                                {buttonvaluesOut.map(button => <Coin key={button} buttonvalue={button} disabled={true}/>)}   
                            </Stack>
                        </Stack>
                        <StyledStack  flexDirection="row" alignItems="center" gap={2} height="2rem" >
                            {isChangeVisible && <>
                                <Text className="change">{refundedMoney?.twenty}</Text>
                                <Text className="change">{refundedMoney?.ten}</Text>
                                <Text className="change">{refundedMoney?.five}</Text>
                            </>}
                        </StyledStack>
                    </Stack>
                </Box>
                <Touchpad 
                    onRefundClick={onHandleClickRefundButton} 
                    onHandleClickTouchButton={onHandleClickTouchButton}
                    disabled={isTouchPadActive ? false : true}
                />
            </Stack> 
        </Stack>
)}

const StyledText = styled(Text)`
    padding: ${(props)=> props.theme.spacing(4)};
    text-transform: uppercase;
`

const StyledStack = styled(Stack)`
    .change {
        width: 3rem;
        animation: cssAnimation 0s 5s forwards;
        visibility: visible;
    }

    @keyframes cssAnimation {
        to   { visibility: hidden; }
    }
`