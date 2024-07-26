import { useContext } from "react"
import { AppContext } from "../App"

export const useDrawerPrice = () => {
    const { drawerCard } = useContext(AppContext);

    const totalPrice = drawerCard.reduce((prev, obj) => obj.price + prev, 0);
    const summTax = (totalPrice / 100 * 5).toFixed(0);
    const totalSumm = Number(totalPrice) + Number(summTax);

    return { totalPrice, summTax, totalSumm }
}