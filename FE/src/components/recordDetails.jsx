import { LeftIcon } from "./icon/leftIcon"
import { RightIcon } from "./icon/rightIcon"

export const RecordDetails = () => {
    return <div className="mt-6">
        <div>
            <div className="inline-flex items-center gap-4">
                <LeftIcon className="bg-[#E5E7EB] p-1 rounded-md"/>
                <p>Last 30 Days</p>
                <RightIcon className="bg-[#E5E7EB] p-1 rounded-md"/>
            </div>
            <div>select</div>
        </div>
        <div></div>
    </div>
}