export default function Mapping() {
    return (
        <form>
            <div>
                <label htmlFor="location">파트</label>
                <select name="location" id="location">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">위치</label>
                <select name="location" id="location">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">카테고리</label>
                <select name="location" id="location">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">제조사</label>
                <select name="location" id="location">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>
            <input type="submit" value="등록" />
        </form>
    )
    
}